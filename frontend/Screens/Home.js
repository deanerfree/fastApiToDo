import React, { useEffect, useState } from "react"
import { Text, View, SafeAreaView } from "react-native"
import axios from "axios"

const Home = () => {
	const [data, setData] = useState([])
	useEffect(() => {
		axios.get("http://localhost:8000/api/todo").then((res) => {
			console.log(res.data)
			setData(res.data)
		})
	}, [])
	console.log(data)
	return (
		<SafeAreaView>
			{!data ? (
				<Text>Loading...</Text>
			) : (
				data.map((item, index) => {
					return (
						<View key={index}>
							<Text>{item.title}</Text>
						</View>
					)
				})
			)}
		</SafeAreaView>
	)
}

export default Home
