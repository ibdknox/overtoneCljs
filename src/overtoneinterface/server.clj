(ns overtoneinterface.server
  (:require [noir.server :as server]
            [noir.fetch.remotes :as remotes]))

(server/load-views "src/overtoneinterface/views/")
(server/add-middleware remotes/wrap-remotes)

(defn -main [& m]
  (let [mode (keyword (or (first m) :dev))
        port (Integer. (get (System/getenv) "PORT" "8080"))]
    (server/start port {:mode mode
                        :ns 'overtoneinterface})))

