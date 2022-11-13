export default {
	BottomTab: [
		{
			title: "Shop ",
			svg: (active) => {
				return (
					<svg width="21" height="21" viewBox="0 0 21 21" fill={active ? "#0c8d3b" : "#181725"} xmlns="http://www.w3.org/2000/svg">
						<path d="M7.7063 7.75407C8.2363 8.22907 8.9383 8.51807 9.7063 8.51807H11.7063C12.4444 8.51909 13.1568 8.24695 13.7063 7.75407H7.7063ZM7.7063 7.75407C7.15684 8.24695 6.44443 8.51909 5.7063 8.51807L7.7063 7.75407ZM6.7563 2.51807V2.46807H6.7063H3.7063C3.42782 2.46807 3.16075 2.57869 2.96384 2.7756C2.76693 2.97252 2.6563 3.23959 2.6563 3.51807V5.51807C2.6563 5.79654 2.76693 6.06362 2.96384 6.26053C3.16075 6.45744 3.42782 6.56807 3.7063 6.56807H5.7063C5.98478 6.56807 6.25185 6.45744 6.44876 6.26053C6.64568 6.06362 6.7563 5.79654 6.7563 5.51807V2.51807ZM3.7163 8.46807H3.6663V8.51807V18.4831V18.5331H3.7163H5.7063H5.7563V18.4831V13.5181C5.7563 13.0009 5.96175 12.5049 6.32744 12.1392C6.69314 11.7735 7.18913 11.5681 7.7063 11.5681H9.7063C10.2235 11.5681 10.7195 11.7735 11.0852 12.1392C11.4509 12.5049 11.6563 13.0009 11.6563 13.5181V18.4831V18.5331H11.7063H17.7193H17.7693V18.4831V8.51807V8.46807H17.7193H15.7063C14.9511 8.46807 14.2608 8.18391 13.7397 7.71683L13.7063 7.68691L13.6729 7.71685C13.1326 8.20148 12.4322 8.46907 11.7064 8.46807H11.7063H9.7063C8.95106 8.46807 8.26083 8.18391 7.73967 7.71683L7.70629 7.68691L7.67291 7.71685C7.13264 8.20148 6.43216 8.46907 5.70637 8.46807H5.7063H3.7163ZM1.71447 7.69519C1.41803 7.42442 1.18 7.09573 1.0152 6.72925C0.843973 6.34848 0.755719 5.93564 0.756302 5.51814V5.51807V3.51807C0.756302 2.73568 1.0671 1.98533 1.62034 1.4321C2.17357 0.878869 2.92391 0.568066 3.7063 0.568066H17.7063C18.4887 0.568066 19.239 0.878869 19.7923 1.4321C20.3455 1.98533 20.6563 2.73568 20.6563 3.51807V5.51807C20.6563 6.3854 20.2827 7.1661 19.6858 7.70598L19.6693 7.72087V7.74307V18.4831C19.6693 19.0002 19.4639 19.4962 19.0982 19.8619C18.7325 20.2276 18.2365 20.4331 17.7193 20.4331H10.0793V20.4322L10.07 20.4339C9.9501 20.4566 9.82833 20.468 9.70629 20.4681H7.7063C7.58427 20.468 7.4625 20.4566 7.34259 20.4339L7.34276 20.4331H7.3333H3.7173C3.20013 20.4331 2.70414 20.2276 2.33844 19.8619C1.97275 19.4962 1.7673 19.0002 1.7673 18.4831V7.76307V7.64237L1.71447 7.69519ZM9.7563 13.5181V13.4681H9.7063H7.7063H7.6563V13.5181V18.4831V18.5331H7.7063H9.7063V18.4841H9.7563V18.4831V18.4331V13.5181ZM12.7563 2.51807V2.46807H12.7063H8.7063H8.6563V2.51807V5.51807C8.6563 5.79654 8.76693 6.06362 8.96384 6.26053C9.16075 6.45744 9.42782 6.56807 9.7063 6.56807H11.7063C11.9848 6.56807 12.2519 6.45744 12.4488 6.26053C12.6457 6.06362 12.7563 5.79654 12.7563 5.51807V2.51807ZM14.7063 2.46807H14.6563V2.51807V5.51807C14.6563 5.79654 14.7669 6.06362 14.9638 6.26053C15.1608 6.45744 15.4278 6.56807 15.7063 6.56807H17.7063C17.9848 6.56807 18.2519 6.45744 18.4488 6.26053C18.6457 6.06362 18.7563 5.79654 18.7563 5.51807V3.51807C18.7563 3.23959 18.6457 2.97252 18.4488 2.7756C18.2519 2.57869 17.9848 2.46807 17.7063 2.46807H14.7063ZM14.7063 11.5681H15.7063C15.9583 11.5681 16.1999 11.6682 16.3781 11.8463C16.5562 12.0245 16.6563 12.2661 16.6563 12.5181V15.5181C16.6563 15.77 16.5562 16.0117 16.3781 16.1898C16.1999 16.368 15.9583 16.4681 15.7063 16.4681H14.7063C14.4543 16.4681 14.2127 16.368 14.0346 16.1898C13.8564 16.0117 13.7563 15.77 13.7563 15.5181V12.5181C13.7563 12.2661 13.8564 12.0245 14.0346 11.8463C14.2127 11.6682 14.4543 11.5681 14.7063 11.5681Z" fill={active ? "#0c8d3b" : "#181725"} stroke="white" stroke-width="0.1" />
					</svg>

				);
			},
			path: "/dashboard/tab1",
		},
		{
			title: "Explore",
			svg: (active) => {
				return (
					<svg width="29" height="19" viewBox="0 0 29 19" fill={active ? "#0c8d3b" : "none"} xmlns="http://www.w3.org/2000/svg">
						<path d="M18.2711 14.2376C19.0591 14.2376 19.8393 14.0824 20.5672 13.7808C21.2952 13.4793 21.9566 13.0374 22.5138 12.4802C23.0709 11.9231 23.5129 11.2616 23.8144 10.5337C24.1159 9.80571 24.2711 9.0255 24.2711 8.23756C24.2711 7.44963 24.1159 6.66942 23.8144 5.94146C23.5129 5.21351 23.0709 4.55207 22.5138 3.99492C21.9566 3.43777 21.2952 2.99581 20.5672 2.69429C19.8393 2.39276 19.0591 2.23756 18.2711 2.23756C16.6798 2.23756 15.1537 2.8697 14.0285 3.99492C12.9033 5.12014 12.2711 6.64627 12.2711 8.23756C12.2711 9.82886 12.9033 11.355 14.0285 12.4802C15.1537 13.6054 16.6798 14.2376 18.2711 14.2376ZM24.5911 13.1436L28.1711 16.7236C28.2666 16.8159 28.3427 16.9263 28.395 17.0483C28.4473 17.1704 28.4748 17.3016 28.4759 17.4344C28.4769 17.5672 28.4515 17.6988 28.4012 17.8217C28.3508 17.9445 28.2765 18.0561 28.1825 18.15C28.0886 18.2438 27.9768 18.318 27.8539 18.3682C27.731 18.4183 27.5993 18.4436 27.4665 18.4423C27.3337 18.4411 27.2025 18.4134 27.0806 18.3609C26.9586 18.3084 26.8483 18.2321 26.7561 18.1366L23.1761 14.5566C21.5686 15.8044 19.5459 16.3927 17.5199 16.2018C15.4938 16.0108 13.6167 15.0549 12.2707 13.5286C10.9246 12.0024 10.2108 10.0205 10.2746 7.98649C10.3383 5.95247 11.1748 4.01919 12.6138 2.58021C14.0528 1.14123 15.986 0.304731 18.0201 0.24099C20.0541 0.177248 22.0359 0.89106 23.5622 2.23711C25.0884 3.58317 26.0444 5.46028 26.2353 7.48632C26.4263 9.51236 25.838 11.535 24.5901 13.1426L24.5911 13.1436Z" fill={active ? "#0c8d3b" : "#181725"} />
						<rect x="0.126587" y="0.237061" width="8.85499" height="2.39923" rx="1.19961" fill={active ? "#0c8d3b" : "#181725"} />
						<rect x="0.126587" y="7.67523" width="6.46414" height="2.39923" rx="1.19961" fill={active ? "#0c8d3b" : "#181725"} />
						<rect x="0.126587" y="15.1138" width="8.85499" height="2.39923" rx="1.19961" fill={active ? "#0c8d3b" : "#181725"} />
					</svg>

				);
			},
			path: "/dashboard/tab2",
		},
		{
			title: "Cart",
			svg: (active) => {
				return (
					<svg
						width='23'
						height='21'
						viewBox='0 0 23 21'
						fill={active ? "#0c8d3b" : '#181725'}
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M8.93223 20.5181C8.28368 20.5181 7.66169 20.2604 7.2031 19.8018C6.7445 19.3432 6.48687 18.7212 6.48687 18.0727C6.48687 17.4241 6.7445 16.8021 7.2031 16.3436C7.66169 15.885 8.28368 15.6273 8.93223 15.6273C9.58078 15.6273 10.2028 15.885 10.6614 16.3436C11.12 16.8021 11.3776 17.4241 11.3776 18.0727C11.3776 18.7212 11.12 19.3432 10.6614 19.8018C10.2028 20.2604 9.58078 20.5181 8.93223 20.5181ZM17.491 20.5181C16.8425 20.5181 16.2205 20.2604 15.7619 19.8018C15.3033 19.3432 15.0456 18.7212 15.0456 18.0727C15.0456 17.4241 15.3033 16.8021 15.7619 16.3436C16.2205 15.885 16.8425 15.6273 17.491 15.6273C18.1396 15.6273 18.7615 15.885 19.2201 16.3436C19.6787 16.8021 19.9364 17.4241 19.9364 18.0727C19.9364 18.7212 19.6787 19.3432 19.2201 19.8018C18.7615 20.2604 18.1396 20.5181 17.491 20.5181ZM1.54968 3.30636C1.24445 3.29651 0.955016 3.16834 0.742584 2.94895C0.530152 2.72955 0.411377 2.43614 0.411377 2.13075C0.411377 1.82536 0.530152 1.53195 0.742584 1.31255C0.955016 1.09316 1.24445 0.964984 1.54968 0.955139L2.95699 0.955139C4.05984 0.955139 5.01354 1.72054 5.25318 2.7965L6.7852 9.69487C7.02485 10.7708 7.97854 11.5362 9.0814 11.5362H18.2662L20.0293 4.48135H8.60333C8.30097 4.46756 8.01557 4.33774 7.80649 4.11889C7.5974 3.90005 7.48073 3.60903 7.48073 3.30636C7.48073 3.00369 7.5974 2.71266 7.80649 2.49382C8.01557 2.27498 8.30097 2.14516 8.60333 2.13136H20.0293C20.3867 2.13125 20.7395 2.21264 21.0607 2.36933C21.382 2.52603 21.6633 2.7539 21.8832 3.03564C22.1032 3.31737 22.2561 3.64554 22.3301 3.99521C22.4042 4.34488 22.3976 4.70684 22.3108 5.05357L20.5477 12.106C20.4206 12.6149 20.127 13.0666 19.7136 13.3894C19.3002 13.7122 18.7907 13.8875 18.2662 13.8874H9.0814C8.0113 13.8876 6.97316 13.5227 6.13842 12.8532C5.30368 12.1836 4.72228 11.2494 4.49023 10.2047L2.95699 3.30636H1.54968Z'
							fill={active ? "#0c8d3b" : '#181725'}
						/>
					</svg>
				);
			},
			path: "/dashboard/tab3",
		},
		{
			title: "Favourite",
			svg: (active) => {
				return (
					<svg
						width='23'
						height='20'
						viewBox='0 0 23 20'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M3.68544 9.00969L11.5095 16.8338L19.3336 9.00969C20.0254 8.31794 20.414 7.37973 20.414 6.40145C20.414 5.42317 20.0254 4.48496 19.3336 3.79321C18.9911 3.4507 18.5845 3.179 18.137 2.99363C17.6894 2.80826 17.2098 2.71285 16.7254 2.71285C15.7471 2.71285 14.8089 3.10147 14.1172 3.79321L11.5095 6.40084L8.90192 3.79444C8.20841 3.11198 7.27332 2.7312 6.30033 2.73504C5.32734 2.73889 4.39529 3.12705 3.7072 3.81498C3.01911 4.50291 2.63073 5.43487 2.62665 6.40786C2.62257 7.38084 3.00314 8.31602 3.68544 9.00969ZM10.6403 2.05357L11.5095 2.92278L12.3787 2.05357C12.9487 1.47865 13.6265 1.02196 14.3734 0.709714C15.1203 0.397469 15.9215 0.23582 16.731 0.234047C17.5405 0.232274 18.3424 0.390413 19.0906 0.699384C19.8389 1.00836 20.5187 1.46207 21.0911 2.03449C21.6636 2.60691 22.1173 3.28675 22.4262 4.03499C22.7352 4.78323 22.8934 5.58513 22.8916 6.39465C22.8898 7.20417 22.7282 8.00536 22.4159 8.75224C22.1037 9.49912 21.647 10.177 21.0721 10.7469L12.38 19.4402C12.2658 19.5545 12.1302 19.6452 11.981 19.707C11.8317 19.7689 11.6717 19.8008 11.5102 19.8008C11.3486 19.8008 11.1886 19.7689 11.0394 19.707C10.8901 19.6452 10.7545 19.5545 10.6403 19.4402L1.94702 10.7481C1.36429 10.18 0.900147 9.50191 0.58153 8.75306C0.262913 8.00421 0.0961606 7.19955 0.0909465 6.38576C0.0857324 5.57196 0.24216 4.76523 0.551155 4.01237C0.86015 3.2595 1.31556 2.57548 1.89097 1.99999C2.46638 1.42449 3.15034 0.968985 3.90316 0.659884C4.65599 0.350782 5.4627 0.19424 6.27649 0.199339C7.09029 0.204438 7.89497 0.371077 8.64386 0.689588C9.39275 1.0081 10.0709 1.47214 10.6391 2.0548L10.6403 2.05357Z'
							fill={active ? "#0c8d3b" : '#181725'}
						/>
					</svg>
				);
			},
			path: "/dashboard/tab4",
		},
		{
			title: "Account",
			svg: (active) => {
				return (
					<svg
						width='17'
						height='21'
						viewBox='0 0 17 21'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M4.61612 10.5881C4.75695 10.5356 4.90839 10.5083 5.0615 10.5078C5.21461 10.5074 5.36628 10.5337 5.50754 10.5853C5.6488 10.6368 5.77678 10.7126 5.88392 10.8081C5.99106 10.9036 6.07519 11.0168 6.13132 11.1412C6.18746 11.2656 6.21447 11.3985 6.21075 11.5321C6.20704 11.6657 6.17267 11.7974 6.10969 11.9192C6.0467 12.041 5.95638 12.1506 5.84406 12.2415C5.73173 12.3323 5.59969 12.4025 5.45573 12.4481C4.69005 12.7114 4.03289 13.1699 3.56976 13.7638C3.10663 14.3577 2.85897 15.0596 2.85901 15.7781V17.5181C2.85901 17.7833 2.97969 18.0376 3.1945 18.2252C3.40931 18.4127 3.70066 18.5181 4.00445 18.5181H13.168C13.4718 18.5181 13.7632 18.4127 13.978 18.2252C14.1928 18.0376 14.3135 17.7833 14.3135 17.5181V15.8711C14.3136 15.1295 14.0556 14.4055 13.5736 13.7949C13.0917 13.1843 12.4085 12.716 11.6148 12.4521C11.4699 12.4082 11.3367 12.3394 11.2228 12.2497C11.109 12.16 11.017 12.0513 10.9522 11.9299C10.8874 11.8086 10.8511 11.6772 10.8456 11.5434C10.8401 11.4096 10.8654 11.2763 10.92 11.1512C10.9746 11.0261 11.0574 10.9119 11.1635 10.8152C11.2696 10.7186 11.3969 10.6416 11.5378 10.5887C11.6786 10.5358 11.8302 10.5081 11.9835 10.5074C12.1368 10.5066 12.2888 10.5326 12.4303 10.5841C13.6578 10.9922 14.7142 11.7164 15.4596 12.6606C16.2051 13.6047 16.6043 14.7244 16.6044 15.8711V17.5181C16.6044 18.3137 16.2423 19.0768 15.5979 19.6394C14.9534 20.202 14.0794 20.5181 13.168 20.5181H4.00445C3.09308 20.5181 2.21903 20.202 1.57459 19.6394C0.930157 19.0768 0.568115 18.3137 0.568115 17.5181L0.568115 15.7781C0.568273 14.6582 0.954447 13.5643 1.6764 12.6387C2.39836 11.7131 3.42268 10.9985 4.61612 10.5881ZM8.58623 0.518066C9.8014 0.518066 10.9668 0.939494 11.826 1.68964C12.6853 2.43978 13.168 3.4572 13.168 4.51807V6.51807C13.168 7.57893 12.6853 8.59635 11.826 9.34649C10.9668 10.0966 9.8014 10.5181 8.58623 10.5181C7.37107 10.5181 6.20568 10.0966 5.34642 9.34649C4.48717 8.59635 4.00445 7.57893 4.00445 6.51807V4.51807C4.00445 3.4572 4.48717 2.43978 5.34642 1.68964C6.20568 0.939494 7.37107 0.518066 8.58623 0.518066ZM8.58623 2.51807C7.97865 2.51807 7.39596 2.72878 6.96633 3.10385C6.5367 3.47893 6.29534 3.98763 6.29534 4.51807V6.51807C6.29534 7.0485 6.5367 7.55721 6.96633 7.93228C7.39596 8.30735 7.97865 8.51807 8.58623 8.51807C9.19382 8.51807 9.77651 8.30735 10.2061 7.93228C10.6358 7.55721 10.8771 7.0485 10.8771 6.51807V4.51807C10.8771 3.98763 10.6358 3.47893 10.2061 3.10385C9.77651 2.72878 9.19382 2.51807 8.58623 2.51807Z'
							fill={active ? "#0c8d3b" : '#181725'}
						/>
					</svg>
				);
			},
			path: "/dashboard/tab5",
		},
	],
};
