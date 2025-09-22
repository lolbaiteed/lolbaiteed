package main 

import (
	"log"
	"net/http"
)

func main() {
	fs := http.FileServer(http.Dir("../module-b"));
	http.Handle("/", fs);

	log.Println("Server running on localhost:8080");
	err := http.ListenAndServe(":8080", nil)
	if err != nil {
		log.Fatal("ListenAndServe: ", err);
	}
}

