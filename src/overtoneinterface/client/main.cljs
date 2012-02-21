(ns overtoneinterface.client.main
  (:require [crate.core :as crate]
            [fetch.remotes :as remotes])
  (:use [jayq.core :only [$ append delegate data]])
  (:use-macros [crate.macros :only [defpartial]]))

(def $body ($ :body))
(def $piano ($ :#piano))
(def $controls ($ :#controls))
(def $notes ($ :#notes))
(def $wobble ($ :#wobble))

(defpartial button [{:keys [label action param]}]
  [:a.button {:href "#" :data-action action :data-param param} label])

(def piano-notes (for [note (range 40 60)] 
                   {:label (str note) :action "play-note" :param note}))

(def dub-notes (for [note (range 40 80)] 
                   {:label (str note) :action "dub-note" :param note}))

(def dub-wobble (for [w (range 0 8)] 
                   {:label (str "w" w) :action "dub-wobble" :param w}))

(def control-buttons [{:label "start" :action "start-dub" :param ""}
                      {:label "stop" :action "stop-dub" :param ""}])

(defn populate [container buttons]
  (doseq [b buttons]
    (append container (button b))))

(populate $piano piano-notes)
(populate $controls control-buttons)
(populate $notes dub-notes)
(populate $wobble dub-wobble)

(delegate $body button :click
          (fn [e]
            (.preventDefault e)
            (this-as me 
              (let [$me ($ me)
                    action (data $me :action)
                    param (data $me :param)
                    param (if (= param "")
                            []
                            [param])]
                (remotes/remote-callback action param)))))

