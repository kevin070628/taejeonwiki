'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'

interface ContentItem {
    title: string
    content: string
    items?: ContentItem[]
}

const tableOfContents: ContentItem[] = [
    {
        title: "1. 컴퓨터 하드웨어 구성 요소",
        content: "컴퓨터의 주요 하드웨어 구성 요소에 대한 개요입니다.",
        items: [
            {
                title: "CPU (중앙 처리 장치)",
                content: "정의: CPU는 컴퓨터의 '두뇌'로, 프로그램의 명령어를 읽고 실행하는 역할을 합니다. 우리가 컴퓨터에서 실행하는 모든 작업은 CPU가 연산하고 명령을 처리함으로써 이루어집니다.\n작동 원리:\n명령어 인출(가져오기): CPU는 프로그램의 명령어를 메모리에서 가져옵니다.\n명령어 해석(이해하기): CPU는 가져온 명령어를 이해합니다.\n명령어 실행(실행하기): CPU는 명령을 처리하여 결과를 생성합니다.\n예시: 컴퓨터에서 실행되는 게임, 웹 브라우징, 문서 작성 등의 작업 모두 CPU가 처리합니다.",
                items: [
                    {
                        title: "ALU (산술 논리 장치)",
                        content: "정의: ALU는 CPU의 한 부분으로, 숫자 계산(산술 연산)과 참/거짓 판단(논리 연산)을 수행합니다.\n작동 방식: 예를 들어, '3 더하기 5는 얼마인가?'라는 질문에 대해 ALU가 '8'이라는 답을 내립니다.\n비유: ALU는 수학을 하는 계산기와 같습니다. 어떤 숫자 두 개를 넣으면 그에 대한 결과를 빠르게 계산해줍니다."
                    },
                    {
                        title: "제어 장치 (Control Unit)",
                        content: "정의: 제어 장치는 CPU의 다른 구성 요소가 어떻게 동작해야 하는지를 지시하는 역할을 합니다.\n작동 방식: 명령어를 해석하고, ALU, 메모리, 레지스터 등 다른 부품이 언제 무엇을 해야 하는지를 결정합니다.\n비유: 제어 장치는 오케스트라의 지휘자와 같습니다. 지휘자가 악기 연주자에게 언제 연주해야 할지를 알려주듯, 제어 장치는 CPU 내 모든 부품의 작업을 조정합니다."
                    },
                    {
                        title: "레지스터 (Register)",
                        content: "정의: 레지스터는 CPU 내부에 있는 아주 빠른 메모리 공간으로, 임시로 데이터를 저장하는 데 사용됩니다.\n작동 방식: CPU가 작업을 수행할 때 필요한 데이터를 잠시 보관하여 신속하게 접근할 수 있습니다.\n비유: 레지스터는 책상 위에 놓인 메모장과 같습니다. 자주 사용하는 정보나 수치를 적어 두면, 언제든지 빠르게 꺼내볼 수 있습니다.",
                        items: [
                            {
                                title: "프로그램 카운터 (Program Counter)",
                                content: "정의: 프로그램 카운터는 다음에 실행할 명령어의 위치를 저장하는 레지스터입니다.\n작동 방식: 프로그램이 실행될 때, 프로그램 카운터는 다음에 실행해야 할 명령어 주소를 가리킵니다.\n비유: 프로그램 카운터는 독서 중인 책의 페이지 번호처럼 생각할 수 있습니다. 다음 페이지로 넘어가기 위해 현재 읽고 있는 페이지 번호를 기록해두는 것입니다."
                            },
                            {
                                title: "스택 포인터 (Stack Pointer)",
                                content: "정의: 스택 포인터는 스택 메모리의 현재 위치를 가리키는 레지스터입니다.\n작동 방식: 함수 호출이나 임시 데이터를 저장할 때, 스택 포인터는 저장된 데이터의 위치를 추적합니다.\n비유: 스택 포인터는 쌓아 놓은 종이더미의 가장 위에 있는 종이의 위치를 알려주는 지점과 같습니다. 어떤 종이를 꺼내거나 새 종이를 올릴 때 위치를 잘 관리해야 합니다."
                            },
                            {
                                title: "플래그 레지스터 (Flags)",
                                content: "정의: 플래그 레지스터는 연산 결과에 따라 CPU의 상태를 표시하는 비트를 저장합니다.\n작동 방식: 예를 들어, 어떤 계산이 0인지, 음수인지, 양수인지를 나타내는 정보를 담고 있습니다.\n비유: 플래그 레지스터는 경고등이 있는 자동차 대시보드와 같습니다. 연산 결과에 따라 다양한 경고등이 켜지거나 꺼지면서 CPU가 어떤 상태인지 알려줍니다."
                            }
                        ]
                    }
                ]
            },
            {
                title: "메모리 (Memory)",
                content: "정의: 메모리는 데이터를 임시로 저장하는 공간으로, 컴퓨터가 작업하는 동안 필요한 정보를 저장합니다. 메모리는 빠르게 정보를 저장하고 불러올 수 있기 때문에 CPU가 더 효율적으로 작업할 수 있게 합니다.\n종류:\nRAM (랜덤 액세스 메모리): 컴퓨터가 켜져 있을 때만 데이터를 저장하는 임시 저장 장치로, 전원이 꺼지면 데이터가 사라집니다.\nROM (읽기 전용 메모리): 시스템이 부팅될 때 필요한 기본 정보를 저장하는 메모리로, 컴퓨터를 끄더라도 데이터가 유지됩니다.\n비유: RAM은 우리가 필기 중인 메모지와 비슷합니다. 메모지는 임시로 내용을 적어두지만, 다 쓰고 나면 지워버립니다.",
                items: [
                    {
                        title: "RAM",
                        content: "RAM (랜덤 액세스 메모리): 컴퓨터가 켜져 있을 때만 데이터를 저장하는 임시 저장 장치로, 전원이 꺼지면 데이터가 사라집니다."
                    },
                    {
                        title: "ROM",
                        content: "ROM (읽기 전용 메모리): 시스템이 부팅될 때 필요한 기본 정보를 저장하는 메모리로, 컴퓨터를 끄더라도 데이터가 유지됩니다."
                    },
                    {
                        title: "캐시 (Cache)",
                        content: "정의: 캐시는 CPU와 메모리 사이에서 자주 사용하는 데이터를 임시로 저장하는 고속 메모리입니다. 이를 통해 CPU는 필요한 데이터를 빠르게 불러올 수 있습니다.\n작동 원리: 캐시는 CPU가 자주 사용하는 정보를 저장하여, CPU가 메모리를 직접 찾아가는 시간을 줄입니다.\n비유: 캐시는 책상 위에 자주 사용하는 자료를 올려두는 것과 같습니다. 필요한 자료를 매번 서재에서 찾는 것보다, 책상 위에 두면 빠르게 꺼내 쓸 수 있습니다."
                    }
                ]
            },
            {
                title: "버스 (Bus)",
                content: "정의: 버스는 컴퓨터 내부에서 데이터를 전송하는 '통로'로, 컴퓨터의 각 구성 요소가 데이터를 주고받을 수 있게 연결해줍니다.\n종류:\n주소 버스: CPU가 데이터를 어디에서 가져와야 할지 위치를 지정합니다.\n데이터 버스: 실제로 데이터가 이동하는 통로입니다.\n제어 버스: 데이터 전송 과정에서 발생하는 명령과 신호를 제어합니다.\n비유: 버스는 고속도로처럼 데이터가 지나가는 길이라고 생각할 수 있습니다. CPU, 메모리, 저장 장치가 이 고속도로를 통해 정보를 주고받습니다.",
                items: [
                    {
                        title: "주소 버스",
                        content: "주소 버스: CPU가 데이터를 어디에서 가져와야 할지 위치를 지정합니다."
                    },
                    {
                        title: "데이터 버스",
                        content: "데이터 버스: 실제로 데이터가 이동하는 통로입니다."
                    }
                ]
            },
            {
                title: "저장 장치 (Storage Device)",
                content: "정의: 저장 장치는 데이터를 오랫동안 저장할 수 있는 공간입니다. 우리가 컴퓨터에서 사용하는 파일, 프로그램, 운영체제는 모두 저장 장치에 보관됩니다.\n종류:\nHDD (하드 디스크 드라이브): 자기 디스크를 사용하여 데이터를 저장하는 장치로, 대용량을 저렴하게 제공합니다. 다만, 속도는 상대적으로 느립니다.\nSSD (솔리드 스테이트 드라이브): 플래시 메모리를 사용해 데이터를 저장하며, HDD보다 빠릅니다. 운영 체제와 프로그램이 빠르게 실행될 수 있게 해줍니다.\n비유: 저장 장치는 책장이며, 각 파일은 책장에 꽂아두는 책입니다. 자주 보지 않는 책은 책장에 두고, 필요할 때 꺼내 볼 수 있습니다."
            },
            {
                title: "전원 공급 장치 (Power Supply Unit, PSU)",
                content: "정의: 전원 공급 장치는 컴퓨터에 필요한 전력을 공급하는 장치로, 전기를 적절한 형태로 변환하여 각 구성 요소에 전달합니다.\n작동 방식: 전원 공급 장치는 교류(AC) 전력을 직류(DC)로 바꿔 컴퓨터가 안정적으로 작동할 수 있게 합니다.\n비유: 전원 공급 장치는 우리가 사용하는 전기 콘센트에 어댑터를 꽂아 사용하는 것과 같습니다. 각 장치가 필요한 전압을 안전하게 받을 수 있도록 조절해줍니다."
            },
            {
                title: "마더보드 (Motherboard)",
                content: "정의: 마더보드는 컴퓨터의 모든 하드웨어를 연결해주는 주요 회로 기판으로, 모든 장치가 서로 통신할 수 있게 해줍니다.\n구성 요소:\nCPU 소켓: CPU가 장착되는 자리입니다.\nRAM 슬롯: 메모리가 설치되는 자리입니다.\n확장 슬롯:  그래픽 카드, 사운드 카드 등 추가 부품을 연결할 수 있습니다.\n비유: 마더보드는 사람의 신경망과 같습니다. 각 부품이 연결되고 통신할 수 있는 길을 제공합니다."
            },
            {
                title: "그래픽 카드 (GPU, Graphics Processing Unit)",
                content: "정의: 그래픽 카드는 이미지와 비디오를 처리하는 장치로, 화면에 그래픽을 출력하는 역할을 합니다. 주로 게임이나 영상 편집, 디자인 작업에 사용됩니다.\n구성 요소:\nGPU 코어: 그래픽 연산을 빠르게 처리하는 부분으로, 복잡한 이미지 렌더링을 수행합니다.\n메모리: 그래픽을 처리하기 위해 필요한 데이터를 임시로 저장하는 공간입니다.\n비유: 그래픽 카드는 화가처럼 컴퓨터 화면에 그림을 그리고, 우리가 볼 수 있게 이미지를 만듭니다."
            }
        ]
    },
    {
        title: "2. 명령어와 프로세서 구조",
        content: "프로세서의 구조와 명령어 처리 방식에 대한 개요입니다.",
        items: [
            {
                title: "명령어 집합 (Instruction Set)",
                content: "정의: 명령어 집합은 CPU가 이해하고 실행할 수 있는 모든 명령어들의 모음입니다. 이 명령어들은 CPU가 수행할 수 있는 작업의 종류를 정의합니다.\n작동 방식: 프로그래머는 명령어 집합을 사용하여 프로그램을 작성하며, CPU는 이 명령어를 읽고 실행하여 작업을 수행합니다.\n비유: 명령어 집합은 요리책과 같습니다. 요리책에 다양한 요리법이 적혀 있는 것처럼, 명령어 집합에는 CPU가 수행할 수 있는 작업이 적혀 있습니다.",
                items: [
                    {
                        title: "RISC (축소형 명령어 집합 컴퓨터)",
                        content: "정의: RISC는 'Reduced Instruction Set Computer'의 약자로, 간단하고 기본적인 명령어들로 구성된 구조입니다. 각 명령어가 빠르고 효율적으로 실행될 수 있도록 설계되었습니다.\n특징: RISC 아키텍처는 대부분의 명령어를 한 사이클(작업 단위) 내에 수행할 수 있어 속도가 빠릅니다. 간단한 명령어 덕분에 컴퓨터의 설계와 제작이 수월합니다.\n비유: RISC는 조리 시간이 짧은 간단한 요리 레시피와 같습니다. 준비가 간단하고 빠르게 요리를 완성할 수 있는 방법을 제공하므로 요리 시간을 단축할 수 있습니다."
                    },
                    {
                        title: "CISC (복합 명령어 집합 컴퓨터)",
                        content: "정의: CISC는 'Complex Instruction Set Computer'의 약자로, 더 복잡하고 다양한 명령어를 지원하는 구조입니다. 각 명령어가 여러 작업을 수행할 수 있도록 설계되어 있습니다.\n특징: CISC 아키텍처는 한 번의 명령어로 더 많은 작업을 처리할 수 있어, 프로그램을 작성할 때 코드의 양을 줄일 수 있습니다. 그러나 명령어의 복잡성 때문에 처리 속도가 느릴 수 있습니다.\n비유: CISC는 여러 가지 재료를 사용한 복잡한 요리 레시피와 같습니다. 많은 재료를 사용해 다양한 맛을 낼 수 있지만, 요리하는 데 더 많은 시간이 걸릴 수 있습니다."
                    }
                ]
            },
            {
                title: "마이크로프로세서 (Microprocessor)",
                content: "정의: 마이크로프로세서는 CPU의 한 형태로, 모든 기능이 하나의 칩에 집적되어 있는 장치입니다. 즉, CPU의 모든 핵심 기능이 작은 크기로 하나의 반도체 칩에 담겨 있습니다.\n작동 방식: 마이크로프로세서는 CPU가 수행해야 하는 모든 연산을 처리하며, 컴퓨터의 성능과 크기를 개선하는 데 기여합니다.\n비유: 마이크로프로세서는 다기능을 갖춘 작은 주방 가전과 같습니다. 하나의 기기에서 여러 가지 요리를 쉽게 만들어 낼 수 있듯, 마이크로프로세서 하나로 다양한 연산을 수행할 수 있습니다."
            }
        ]
    },
    {
        title: "3. 메모리와 저장소 관련 개념",
        content: "컴퓨터의 메모리 관리와 저장 방식에 대한 개요입니다.",
        items: [
            {
                title: "메모리 계층 (Memory Hierarchy)",
                content: "정의: 메모리 계층은 다양한 종류의 메모리 저장 장치를 속도와 용량에 따라 계층적으로 구성한 것입니다. 이는 컴퓨터의 성능을 최적화하기 위한 설계입니다.\n구성 요소:\n캐시 (Cache): CPU 가까이에 위치한 아주 빠른 메모리로, CPU가 자주 사용하는 데이터를 저장합니다. 속도가 매우 빠르지만 용량이 작습니다.\nRAM (임의 접근 메모리): 현재 실행 중인 프로그램과 데이터를 저장하는 메모리로, 속도가 빠르고 휘발성입니다. 전원이 꺼지면 데이터가 사라집니다.\n하드디스크 (Hard Disk): 대량의 데이터를 영구적으로 저장하는 장치로, 속도는 느리지만 용량이 큽니다. 전원이 꺼져도 데이터가 유지됩니다.\n비유: 메모리 계층은 여러 크기의 저장 공간이 있는 창고와 같습니다. 가장 위층(캐시)은 소량의 고급 물건, 중간층(RAM)은 일상적인 물건, 아래층(하드디스크)은 큰 창고에 보관된 물건처럼 생각할 수 있습니다."
            },
            {
                title: "가상 메모리 (Virtual Memory)",
                content: "정의: 가상 메모리는 실제 메모리(RAM)보다 더 많은 메모리를 사용할 수 있도록 하는 기술입니다. 컴퓨터가 물리적 메모리의 한계를 넘어 프로그램을 실행할 수 있게 합니다.\n작동 방식: 프로그램이 필요로 하는 메모리가 RAM에 모두 적재되지 않으면, 하드디스크의 일부 공간을 사용하여 가상의 메모리 영역을 생성합니다. 이를 통해 사용자에게 더 많은 메모리 공간을 제공합니다.\n비유: 가상 메모리는 큰 책상 위에 쌓아 놓은 서류 더미처럼 생각할 수 있습니다. 책상 공간이 부족하면 서류를 한쪽으로 치워 놓고 필요할 때 다시 꺼내어 사용하듯, 가상 메모리는 메모리 사용량을 늘려 주는 것입니다."
            },
            {
                title: "스택 (Stack)",
                content: "정의: 스택은 후입선출(LIFO, Last In First Out) 방식으로 데이터를 저장하는 메모리 구조입니다. 가장 최근에 저장된 데이터가 가장 먼저 꺼내집니다.\n작동 방식: 함수 호출 시 매개변수나 반환 주소를 저장하거나, 데이터의 임시 저장을 위해 사용됩니다. 스택의 크기는 고정되어 있으며, 저장 공간이 가득 차면 더 이상 저장할 수 없습니다.\n비유: 스택은 접시 더미와 같습니다. 가장 위에 있는 접시를 먼저 꺼내야 하며, 새로운 접시는 항상 위에 쌓아야만 합니다. 접시를 꺼내면 그 아래에 있는 다음 접시가 보이게 됩니다."
            },
            {
                title: "힙 (Heap)",
                content: "정의: 힙은 동적 메모리 할당을 위한 메모리 영역입니다. 프로그래머가 필요에 따라 메모리를 할당하고 해제할 수 있습니다.\n작동 방식: 프로그램이 실행 중에 필요한 만큼 메모리를 요청하고, 사용이 끝나면 그 메모리를 반환할 수 있습니다. 힙은 스택과 달리 메모리의 크기가 가변적입니다.\n비유: 힙은 큰 창고와 같습니다. 원하는 만큼의 공간을 확보할 수 있으며, 사용이 끝난 물건은 언제든지 다시 창고에 반납할 수 있습니다. 공간의 사용이 정리되어 있지 않을 수도 있지만, 필요한 만큼 사용할 수 있다는 장점이 있습니다."
            }
        ]
    },
    {
        title: "4. 프로그램 실행과 관련된 개념",
        content: "프로그램이 실행되는 과정과 관련된 개념들입니다.",
        items: [
            {
                title: "명령어 주기 (Instruction Cycle)",
                content: "정의: 명령어 주기는 CPU가 명령어를 가져오고 실행하는 일련의 과정을 의미합니다. 이 과정은 일반적으로 세 가지 단계로 나눌 수 있습니다: 명령어 가져오기(Fetch), 해석(Decode), 실행(Execute).\n작동 방식:\n명령어 가져오기: CPU가 메모리에서 다음 실행할 명령어를 가져옵니다.\n해석: 가져온 명령어를 해석하여 어떤 작업을 수행해야 할지 결정합니다.\n실행: 결정된 작업을 수행합니다.\n비유: 명령어 주기는 요리를 위한 과정과 같습니다. 요리책에서 레시피를 읽고(가져오기), 어떤 재료와 조리법을 해석하고(해석), 실제로 요리를 만드는(실행) 일련의 단계입니다."
            },
            {
                title: "파이프라이닝 (Pipelining)",
                content: "정의: 파이프라이닝은 CPU가 여러 명령어를 동시에 처리하여 성능을 향상시키는 기술입니다. 이는 명령어 주기의 각 단계를 서로 겹쳐서 실행할 수 있도록 합니다.\n작동 방식: 한 명령어가 실행되는 동안, 다음 명령어는 해석되고 그 다음 명령어는 가져오는 과정을 진행합니다. 이렇게 함으로써 CPU의 효율성이 높아집니다.\n비유: 파이프라이닝은 공장에서 제품을 조립하는 라인과 같습니다. 한 작업자가 조립을 할 때, 다음 작업자는 동시에 부품을 준비하고 다른 작업자는 다음 단계로 넘어가는 식으로, 여러 사람이 동시에 일을 처리하여 전체적인 작업 속도를 높입니다."
            },
            {
                title: "동기화 (Synchronization)",
                content: "정의: 동기화는 여러 작업이나 프로세스가 동시에 진행될 때, 시간적으로 조정하여 서로의 작업이 충돌하지 않도록 하는 과정입니다.\n작동 방식: 여러 프로세스나 스레드가 공유 자원에 접근할 때, 동기화 메커니즘을 통해 한 번에 하나의 프로세스만 자원을 사용할 수 있도록 합니다. 이를 통해 데이터의 일관성을 유지하고 충돌을 방지합니다.\n비유: 동기화는 교차로의 신호등과 같습니다. 여러 방향에서 오는 차량들이 충돌하지 않도록 신호등이 시간을 조절하여 차례대로 지나갈 수 있게 합니다."
            },
            {
                title: "인터럽트 (Interrupt)",
                content: "정의: 인터럽트는 CPU가 특정 이벤트에 반응하도록 하는 메커니즘입니다. 외부 장치나 프로그램에서 발생하는 신호가 CPU의 작업 흐름을 일시적으로 중단하게 만들고, 즉각적인 처리를 요구합니다.\n작동 방식: 인터럽트가 발생하면 CPU는 현재 작업을 중단하고 인터럽트 처리 루틴으로 전환합니다. 인터럽트 처리가 끝나면 원래 작업으로 돌아갑니다.\n비유: 인터럽트는 전화벨과 같습니다. 우리가 어떤 일을 하고 있을 때 전화벨이 울리면, 하던 일을 잠시 멈추고 전화를 받습니다. 통화가 끝나면 다시 원래 하던 일로 돌아가는 것과 같습니다."
            }
        ]
    },
    {
        title: "5. 프로그래밍 언어와 코드 관련 개념",
        content: "프로그래밍 언어의 종류와 코드 실행 과정에 대한 개념들입니다.",
        items: [
            {
                title: "어셈블리어 (Assembly Language)",
                content: "정의: 어셈블리어는 기계어에 가까운 저수준 프로그래밍 언어로, CPU가 이해할 수 있는 명령어를 텍스트 형식으로 표현합니다. 각 어셈블리어 명령어는 CPU의 특정 작업에 대응됩니다.\n특징:\n직접적인 하드웨어 제어: 어셈블리어는 CPU와 메모리를 직접 제어할 수 있어 매우 효율적인 코드를 작성할 수 있습니다.\n가독성: 기계어보다는 읽기 쉽지만, 고급 언어에 비해서는 복잡합니다.\n이식성: 특정 CPU 아키텍처에 종속적이어서 다른 시스템으로의 이식이 어렵습니다.\n비유: 어셈블리어는 요리사가 사용하는 전문 용어와 같습니다. 일반인에게는 이해하기 어렵지만, 요리사들 사이에서는 정확하고 효율적인 의사소통이 가능합니다."
            },
            {
                title: "기계어 (Machine Language)",
                content: "정의: 기계어는 CPU가 직접 이해하고 실행할 수 있는 이진 명령어로 구성된 언어입니다. 모든 프로그램의 기본은 기계어입니다.\n특징:\n이진 코드: 0과 1로만 이루어진 코드입니다.\n직접 실행: CPU가 직접 해석하고 실행할 수 있습니다.\n효율성: 가장 빠른 실행 속도를 제공합니다.\n가독성: 사람이 직접 읽고 이해하기 매우 어렵습니다.\n비유: 기계어는 컴퓨터의 모국어와 같습니다. 컴퓨터는 이 언어를 가장 잘 이해하고 빠르게 처리할 수 있지만, 사람에게는 외계어처럼 보일 수 있습니다."
            },
            {
                title: "연산자 우선순위 (Operator Precedence)",
                content: "정의: 연산자 우선순위는 프로그래밍 언어에서 여러 연산자가 동시에 사용될 때, 어떤 연산이 먼저 수행되는지를 결정하는 규칙입니다.\n작동 방식: 수학에서와 마찬가지로, 프로그래밍에서도 연산자들 사이에 우선순위가 있습니다. 예를 들어, 곱셈과 나눗셈은 덧셈과 뺄셈보다 먼저 수행됩니다.\n중요성: 연산자 우선순위를 이해하는 것은 코드의 정확성과 가독성을 높이는 데 중요합니다. 괄호를 사용하여 우선순위를 명시적으로 지정할 수도 있습니다.\n비유: 연산자 우선순위는 요리 레시피의 순서와 같습니다. 어떤 재료를 먼저 넣고, 어떤 과정을 먼저 수행하는지가 최종 요리의 맛과 질에 영향을 미치는 것처럼, 연산자의 순서도 프로그램의 결과에 큰 영향을 미칩니다."
            }
        ]
    }
]

export default function Component() {
    const [expandedItems, setExpandedItems] = useState<{ [key: string]: boolean }>({})
    const [selectedContent, setSelectedContent] = useState<ContentItem | null>(null)

    const toggleExpand = (title: string) => {
        setExpandedItems(prev => ({ ...prev, [title]: !prev[title] }))
    }

    const selectContent = (item: ContentItem) => {
        setSelectedContent(item)
        if (item.items) {
            toggleExpand(item.title)
        }
    }

    const renderItems = (items: ContentItem[], depth = 0) => {
        return items.map((item) => (
            <div key={item.title} style={{ paddingLeft: depth * 20 }} className={`${depth === 0 ? 'font-bold text-lg' : depth === 1 ? 'text-gray-700' : 'text-gray-500'}`}>
                <button
                    onClick={() => selectContent(item)}
                    className={`flex items-center w-full text-left ${!item.items ? 'text-grey-600 hover:underline' : ''}`}
                >
                    {item.items && (expandedItems[item.title] ? <ChevronDown className="mr-1 h-4 w-4" /> : <ChevronRight className="mr-1 h-4 w-4" />)}
                    {item.title}
                </button>
                {item.items && expandedItems[item.title] && renderItems(item.items, depth + 1)}
            </div>
        ));
    }

    return (
        <div className="flex h-screen">
            <div className="w-1/3 bg-gray-100 p-4 overflow-auto">
                <h2 className="text-2xl font-bold mb-4">TaejeonWiKi</h2>
                {renderItems(tableOfContents)}
            </div>
            <div className="w-2/3 p-4 overflow-auto">
                <h2 className="text-2xl font-bold mb-4">내용</h2>
                {selectedContent ? (
                    <div>
                        <h3 className="text-xl font-semibold mb-2">{selectedContent.title}</h3>
                        <p className="whitespace-pre-wrap">{selectedContent.content}</p>
                    </div>
                ) : (
                    <p>왼쪽 목차에서 항목을 선택하세요.</p>
                )}
            </div>
        </div>
    )
}